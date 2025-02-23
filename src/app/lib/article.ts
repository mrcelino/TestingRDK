import { setCookie } from "@/app/utils/cookie";

export interface Article {
	editor: string;
	author: string;
	like: number;
	id: number;
	hasLiked: boolean;
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
		const response = await fetch(baseurl + "articles", {
			credentials: "include",
			cache: "no-store",
		});
		if (!response.ok) {
			throw new Error("Gagal mengambil data artikel");
		}
		const jsonData = await response.json();
<<<<<<< HEAD
		return jsonData.data as Article[]; // Sesuaikan format sesuai dengan API
=======
		const cookies = document.cookie;
		if (cookies) {
			// document.cookie = cookies;
			const visitorIdMatch = cookies.match(/visitorId=([^;]+)/);
			if (visitorIdMatch && visitorIdMatch[1]) {
				setCookie('visitorId', visitorIdMatch[1]);
			}
		}
		return jsonData.data as Article[]; // Menyesuaikan format API
>>>>>>> 7e356a584f05ce2bcead4b15596178d4027896c3
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

<<<<<<< HEAD
async function updateArticleLike(id: number, increment: number) {
	try {
		const baseurl = process.env.NEXT_PUBLIC_API_BASE_URL;
		const response = await fetch(`${baseurl}articles/${id}/like`, {
			method: "POST",
=======

async function updateArticleLike(id: number) {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}articles/${id}/like`, {
			method: 'POST',
>>>>>>> 7e356a584f05ce2bcead4b15596178d4027896c3
			headers: {
				"Content-Type": "application/json",
			},
<<<<<<< HEAD
			body: JSON.stringify({ increment, hashLiked: true }),
			credentials: "include", // Pastikan cookies diterima
=======
			credentials: 'include',
			cache: 'no-store',
>>>>>>> 7e356a584f05ce2bcead4b15596178d4027896c3
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(
				`HTTP error! Status: ${response.status}, Response: ${errorText}`
			);
		}
<<<<<<< HEAD
=======

		const cookies = document.cookie;

		if (cookies) {
			const visitorIdMatch = cookies.match(/visitorId=([^;]+)/);
			if (visitorIdMatch && visitorIdMatch[1]) {
				setCookie('visitorId', visitorIdMatch[1]);
			}
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error updating like:', error);
	}
}

>>>>>>> 7e356a584f05ce2bcead4b15596178d4027896c3

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
