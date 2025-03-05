export type InfoDTO = {
  success: boolean;
  data: {
    info: string;
  };
};

export type SigninDTO = {
  success: boolean;
  data: {
    token: string;
  };
};

export type ProfileDTO = {
  success: boolean;
  data: {
    fullname: string;
    email: string;
  };
};

export type AuthorDTO = {
  success: boolean;
  data: {
    authorId: number;
    name: string;
  };
};

export type QuoteDTO = {
  success: boolean;
  data: {
    quoteId: number;
    authorId: number;
    quote: string;
  };
};
