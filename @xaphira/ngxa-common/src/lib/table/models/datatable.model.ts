export class Page {
    count: number;
    pageSize: number;
    limit: number;
    offset: number;
}

export interface Sort {
    [name: string]: string[];
}

export interface Keyword {
    [name: string]: string;
}

export class DatatableParamModel {
    key: string;
    value: any;
}

export class DatatableFilter {
    controlName: string;
    type?: 'input' | 'datepicker' | 'select' | 'checkbox' | 'radio' = 'input';
}
