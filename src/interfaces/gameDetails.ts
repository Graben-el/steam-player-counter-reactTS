interface ITags {
    url: string;
    name: string;
}

interface IPublisher {
    link: string;
    name: string;
}

interface IDlcs {
    appId: string;
    url: string;
    name: string;
    price: string;
}

interface IAllReviews {
    summary?: string;
    reviewCount?: string;
    ratingValue?: string;
    bestRating?: string;
    worstRating?: string;
}

export interface IGameDetail {
    imgUrl: string;
    title: string;
    developer: string;
    publisher: IPublisher;
    released: string;
    description: string;
    tags: ITags[];
    allReviews: IAllReviews;
    price: string;
    dlcs: IDlcs[]
}



interface IAppNews {
    appid: number;
    newsitems: INewsItems[];
    count: number;
}

interface INewsItems {
    gid: string;
    title: string;
    url: string;
    is_external_url: boolean;
    author: string;
    contents: string;
    feedlabel: string;
    date: number;
    feed_type: number;
    appid: number;
}

export interface INews {
    appnews: IAppNews;
}
