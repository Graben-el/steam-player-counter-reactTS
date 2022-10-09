interface ITags {
    url: string;
    name: string;
}

interface IPublisher {
    link: string;
    name: string;
}

export interface IGameDetail {
    imgUrl: string;
    title: string;
    developer: string[];
    publisher: IPublisher;
    released: string;
    description: string;
    tags: ITags[];
    allReviews: string[];
    price: string;
    dlcs: string[]
}