import { NextResponse } from 'next/server'
import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

function getFirebaseAdmin() {
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    })
  }
  return getFirestore()
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, organization, phone, mail, comments } = body

    if (!name?.trim() || !mail?.trim()) {
      return NextResponse.json(
        { error: 'Nombre y email son requeridos' },
        { status: 400 }
      )
    }

    const db = getFirebaseAdmin()
    await db.collection('clients').add({
      name: name.trim(),
      organization: organization?.trim() ?? '',
      phone: phone?.trim() ?? '',
      mail: mail.trim(),
      comments: comments?.trim() ?? '',
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[POST /api/contact]', error)
    return NextResponse.json(
      { error: 'Error al enviar el formulario. Intenta de nuevo.' },
      { status: 500 }
    )
  }
}
