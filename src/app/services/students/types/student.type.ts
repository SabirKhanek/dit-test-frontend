export interface Student {
    _id: string;
    name: string;
    department: string;
    semester: number;
    program: string
}

export interface StudentWithoutId {
    name: string;
    department: string;
    semester: number;
    program: string
}