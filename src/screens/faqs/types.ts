interface ListItems {
  item: string
}

interface CategoryItems {
    question:string;
    answer:string;
    answerList: ListItems[]
    additionalList: ListItems[]
  }
  
  export interface Faqs {
    category:string;
    items:CategoryItems[]
  }