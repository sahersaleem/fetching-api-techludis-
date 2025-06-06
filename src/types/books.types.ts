export interface IBooks {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    publishedDate: string;
    description: string;
    publisher:string;
    authors:string[];
    imageLinks: {
        thumbnail:string,
        smallThumbnail:string
    };
    pageCount: string;
    previewLink: string;
    infoLink: string;
    language: string,
      
  };

  salesInfo: {
    country: string;
    saleability: "FOR_SALE" | "Not_FOR_SALE";
    buyLink:string;
  };
  
}
