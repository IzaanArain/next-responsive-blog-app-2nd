

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_ENDPOINT = `${API_BASE_URL}/api`; 
export const apiUrls = {
    categories:`${API_ENDPOINT}/categories`,
    posts:`${API_ENDPOINT}/posts`
}

export const posts = [
    {
        image: "/p1.jpeg",
        category: "Travel",
        color: "#ff7857",
        username: "Alice Smith",
        title: "Exploring the Mountains: A Journey to Remember",
        date: "12.04.22"
    },
    {
        image: "/p1.jpeg",
        category: "Culture",
        color: "#ffb14f",
        username: "Michael Johnson",
        title: "10 Best Street Foods You Must Try!",
        date: "05.08.21"
    },
    {
        image: "/p1.jpeg",
        category: "Food",
        color: "#7fb881",
        username: "Michael Johnson",
        title: "10 Best Street Foods You Must Try!",
        date: "05.08.21"
    },
    {
        image: "/p1.jpeg",
        category: "Fashion",
        color: "#ff7887",
        username: "David Brown",
        title: "Top 5 Exercises for a Healthy Lifestyle",
        date: "20.11.20"
    },
    {
        image: "/p1.jpeg",
        category: "Coding",
        color: "#775aec",
        username: "Sophia Lee",
        title: "The Future of AI: What to Expect in the Next Decade",
        date: "15.09.23"
    },
    {
        image: "/p1.jpeg",
        category: "Style",
        color: "#789cff",
        username: "Emma Wilson",
        title: "The Latest Trends in 2024 Fashion",
        date: "03.02.24"
    }
];

export const categories = [
    {
        name: "Travel",
        color: "#ff7857",
        image: "/travel.png"
    },
    {
        name: "Culture",
        color: "#ffb14f",
        image: "/culture.png"
    },
    {
        name: "Food",
        color: "#7fb881",
        image: "/food.png"
    },
    {
        name: "Coding",
        color: "#775aec",
        image: "/coding.png"
    },
    {
        name: "Fashion",
        color: "#ff7887",
        image: "/fashion.png"
    },
    {
        name: "Style",
        color: "#789cff",
        image: "/style.png"
    }
];

export const COMMENTS = [
    {
        username: "John Doe",
        image: "/p1.jpeg",
        date: "01.01.2025",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Proin vel nulla at dui cursus gravida. Integer vulputate mauris sed libero fermentum, eu posuere nisi vehicula."
    },
    {
        username: "Jane Smith",
        image: "/p1.jpeg",
        date: "01.01.2025",
        comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        username: "Alice Johnson",
        image: "/p1.jpeg",
        date: "01.01.2025",
        comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
        username: "Bob Brown",
        image: "/p1.jpeg",
        date: "01.01.2025",
        comment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
    },
    {
        username: "Charlie Davis",
        image: "/p1.jpeg",
        date: "01.01.2025",
        comment: "Temporibus autem quibusdam et aut officiis debitis rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores."
    }
];


