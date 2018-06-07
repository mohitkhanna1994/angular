export class Meta {
    constructor(
      public userId: String,
      public userChatId: String,
      public action: String,
      public comId: String,    //community id
      public tableName: String,
      public name:String,
      public picLoc:String,
      public phone:String,
      public rating:String,
      public reqId?: String
  ) { }
  }
  
  export class Event {
    constructor(  
      public calendarId: String, 
      public calId: String, 
      public calendar: Calendar,
      public createdBy: String,
      public updtdFields: Array<any> ,
      public createdDate?: String
  ) {}
  }
  
  class Calendar {
    constructor(
      public calType: String, 
      public ids: any,
      public repeats: String, 
      public comments: String, 
      public reqStDT: String, 
      public reqEndDT: String, 
      public eventType: String, 
      public createDT: Date, 
      public status: String, 
      public lstUpdDT: Date, 
      public meta: Meta, 
      public categ: String, 
      public myFav: boolean,
      public subCat: String, 
      public capacity? :Number,
      public effStDT? : Date,  
      public effEndDT? : Date, 
      public pubDT? : Date, 
      public subDT? : Date, 
      public reqStTime?: String, 
      public reqEndTime?: String,
      public eventLocation?:String,
      public origin?: String, 
      public destination?: String
    ) {}
  }
  
  