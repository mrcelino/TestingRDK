export interface Article {
    id: number;
    documentId: string;
    title: string;
    date: string;
    category: string;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string | null;
    locale?: string | null;
    content: {
      type: string;
      children: {
        text: string;
        type: string;
      }[];
    }[];
    article_images: {
      id: number;
      documentId: string;
      image_description: string;
      publicUrl: string;
    }[];
  }
  
  export const fetchArticles = async (): Promise<Article[]> => {
    try {
      const baseurl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const response = await fetch(
        baseurl+"articles"
      );
      if (!response.ok) {
        throw new Error("Gagal mengambil data artikel");
      }
      const jsonData = await response.json();
      return jsonData.data as Article[]; // Menyesuaikan format API
    } catch (error) {
      console.error("Error fetching articles:", error);
      return [];
    }
  };
  