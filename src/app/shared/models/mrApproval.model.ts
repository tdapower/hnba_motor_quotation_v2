export interface IMRApproval {
    SeqId: number;
    JobId: number;
    RevisionId: number;
    RequestedBy: string;
    RecomendedBy: string;
    ApprovedBy: string;
    Remarks: string;
    ApproveBranchType: string;
    RequestStatus: string;
    RequestedMr: number;
    ApproveRejectReason: string;
    ApproveBranchCode: string;
    UserName: string;
    UserEmail: string;
}




