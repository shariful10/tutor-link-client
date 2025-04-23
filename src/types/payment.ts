export interface IPayment {
    _id: string;
    userEmail: string;
    tutorId: string;
    tutorName: string;
    totalAmount: string;
    transaction: string;
    paidStatus: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  