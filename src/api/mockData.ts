export const getInfo = (): Promise<Response> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockResponse = JSON.stringify({
        success: true,
        data: { info: "Some information about the <b>company</b>." },
      });
      resolve(new Response(mockResponse));
    }, 2000);
  });
};

export const login = (email: string, password: string): Promise<Response> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockResponse = JSON.stringify({
        success: true,
        data: {
          token: "fb566635a66295da0c8ad3f467c32dcf",
        },
      });
      localStorage.setItem("user", JSON.stringify({ email, password }));
      resolve(new Response(mockResponse));
    }, 2000);
  });
};

export const getProfile = (token: string): Promise<Response> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "fb566635a66295da0c8ad3f467c32dcf") {
        const mockResponse = JSON.stringify({
          success: true,
          data: {
            fullname: "Max",
            email: JSON.parse(localStorage.getItem("user")!).email,
          },
        });
        resolve(new Response(mockResponse));
      } else {
        reject({
          success: false,
          error: "Invalid token",
        });
      }
    }, 2000);
  });
};

const authorsData = [
  {
    authorId: 1,
    name: "Walt Disney",
    quotes: [
      "The way to get started is to quit talking and begin doing.",
      "All our dreams can come true, if we have the courage to pursue them.",
      "If you can dream it, you can do it.",
    ],
  },
  {
    authorId: 2,
    name: "Mark Twain",
    quotes: [
      "The truth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities; Truth isn't.",
      "If you tell the truth, you don't have to remember anything.",
      "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    ],
  },
  {
    authorId: 3,
    name: "Albert Einstein",
    quotes: [
      "Imagination is more important than knowledge.",
      "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    ],
  },
];

export const getAuthor = (token: string): Promise<Response> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "fb566635a66295da0c8ad3f467c32dcf") {
        const randomIndex = Math.floor(Math.random() * authorsData.length);
        const randomAuthor = authorsData[randomIndex];
        const mockResponse = JSON.stringify({
          success: true,
          data: {
            authorId: randomAuthor.authorId,
            name: randomAuthor.name,
          },
        });

        resolve(new Response(mockResponse));
      } else {
        reject({
          success: false,
          error: "Invalid token",
        });
      }
    }, 5000);
  });
};

export const getQuote = (
  token: string,
  authorId: number
): Promise<Response> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "fb566635a66295da0c8ad3f467c32dcf") {
        const author = authorsData.find(
          (author) => author.authorId === authorId
        );
        if (author) {
          const randomIndex = Math.floor(Math.random() * author.quotes.length);
          const randomQuote = author.quotes[randomIndex];
          const mockResponse = JSON.stringify({
            success: true,
            data: {
              quoteId: Math.floor(Math.random() * 1000),
              authorId: author.authorId,
              quote: randomQuote,
            },
          });

          resolve(new Response(mockResponse));
        } else {
          reject({
            success: false,
            error: "Author not found",
          });
        }
      } else {
        reject({
          success: false,
          error: "Invalid token",
        });
      }
    }, 5000);
  });
};

export const logout = (token: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "fb566635a66295da0c8ad3f467c32dcf") {
        const mockResponse = {
          success: true,
          data: {},
        };

        resolve(mockResponse);
      } else {
        reject({
          success: false,
          error: "Invalid token",
        });
      }
    }, 500);
  });
};
