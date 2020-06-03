export enum Type {
    Design = "Design",
    Video = "Video", 
    HTML = "HTML", 
    Quote = "Quote", 
    Content = "Content", 
    Concept = "Concept", 
    Print = "Print", 
    Gift = "Gift", 
    Copy = "Copy", 
    Adaptation = "Adaptation"
}

export enum Status {
    YetToStart = "YetToStart",
    WIP = "WIP",
    OnHold = "On Hold",
    Completed = "Completed"
}

export enum StatusDescriptions {
    YetToStart = "Yet To Start",
    WIP = "Work In Progress",
    OnHold = "On Hold",
    Completed = "Completed"
}

export interface IJob {
    jobId: string;
    description: string;
    company: string;
    quantity?: number;
    division: string;
    pmt: string;
    type: Type[];
    status: Status,
    startDate: Date,
    firstCut?: Date,
    endDate: Date;
    assignedUser: string,
    mailReceivedDate: Date;
    price?: number
}