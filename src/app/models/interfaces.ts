export interface Incident {
    sysId?: string;
    id?: string;
    title?: string;
    description?: string;
    status?: string;
    assignedTo?: string;
    assignedToDetail?: UserInfo;
    requestedBy?: string;
    requestedByDetail?: UserInfo;
    allComments?: string;
    snowComments?: SNowComments;
}

export interface UserInfo {
    sysId?: string;
    name?: string;
    displayName?: string;
    snow_url?: string;
    email?: string;
    extData?: any;
    ol_photoUrl?: string;
}

export interface SNowComments {
    sysId?: string;
    forSysId?: string;
    type?: string;
    comments?: SNowComment[];
}

export interface SNowComment {
    sysId?: string;
    name?: string;
    elementId?: string;
    element?: string;
    value?: string;
    sysCreatedBy?: UserInfo;
    sysCreatedOn?: string;
    tags?: string;
}

// "sys_id": "46e3e949a9fe198100b846c6d69882fd",
//             "sys_created_on": "2017-12-01 23:41:14",
//             "name": "task",
//             "element_id": "46e3e949a9fe19810069b824ba2c761a",
//             "sys_tags": "",
//             "value": "please fix the roof.",
//             "sys_created_by": "admin",
//             "element": "comments"
