
export class ClientModel {
  
  name: string; 
  organization: string; 
  phone: number; 
  mail: string; 
  comments: string 

  constructor(mail: string, name?: string, organization?: string, comments?: string, phone?: number ) {
    this.name = name;
    this.organization = organization;
    this.phone = phone;
    this.mail = mail;
    this.comments = comments;
  }

}
