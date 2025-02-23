export interface Article {
	editor: string;
	author: string;
	like: number;
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
		const response = await fetch(baseurl + "articles");
		if (!response.ok) {
			throw new Error("Gagal mengambil data artikel");
		}
		const jsonData = await response.json();
		return jsonData.data as Article[]; // Sesuaikan format sesuai dengan API
	} catch (error) {
		console.error("Error fetching articles:", error);
		return [];
	}
};

export const fetchArticleById = async (id: number): Promise<Article | null> => {
	try {
		const baseurl = process.env.NEXT_PUBLIC_API_BASE_URL;
		const response = await fetch(`${baseurl}articles/detail-article?id=${id}`);

		if (!response.ok) {
			throw new Error(`Gagal mengambil data artikel dengan ID ${id}`);
		}

		const jsonData = await response.json();
		return jsonData.data as Article; // Sesuaikan format sesuai dengan API
	} catch (error) {
		console.error("Error fetching article by ID:", error);
		return null;
	}
};

async function updateArticleLike(id: number, increment: number) {
	try {
		const baseurl = process.env.NEXT_PUBLIC_API_BASE_URL;
		const response = await fetch(`${baseurl}articles/${id}/like`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ increment, hashLiked: true }),
			credentials: "include", // Pastikan cookies diterima
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(
				`HTTP error! Status: ${response.status}, Response: ${errorText}`
			);
		}

		// ✅ Ambil response JSON
		const data = await response.json();
		console.log("Success:", data);

		// ✅ Simpan "hashed_value" di LocalStorage
		if (data.hashed_value) {
			localStorage.setItem("user_like", data.hashed_value);
			console.log("Data tersimpan di LocalStorage:", data.hashed_value);
		}
	} catch (error) {
		console.error("Error updating like:", error);
	}
}

export { updateArticleLike };
