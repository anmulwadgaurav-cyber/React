import React from "react";
import Card from "./components/Card";

const App = () => {
  const creators = [
    {
      id: 1,
      coverImage:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Christian Dave",
      job: "Building modern web experiences with React and Tailwind",
      likes: "12.4k",
      posts: 184,
      views: "98.7k",
      isFollowed: true,
    },
    {
      id: 2,
      coverImage:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      photo: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Lisa Bournvelle",
      job: "Designing intuitive user interfaces and scalable design systems",
      likes: "8.9k",
      posts: 132,
      views: "76.2k",
      isFollowed: true,
    },
    {
      id: 3,
      coverImage:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
      photo: "https://randomuser.me/api/portraits/men/54.jpg",
      name: "Andrew Maxwolf",
      job: "Full stack developer obsessed with performance and clean code",
      likes: "21.3k",
      posts: 241,
      views: "154.6k",
      isFollowed: false,
    },
    {
      id: 4,
      coverImage:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      photo: "https://randomuser.me/api/portraits/women/12.jpg",
      name: "Susan Williams",
      job: "Creating digital products balancing usability and visual clarity",
      likes: "15.1k",
      posts: 198,
      views: "112.9k",
      isFollowed: false,
    },
    {
      id: 5,
      coverImage:
        "https://images.unsplash.com/photo-1506765515384-028b60a970df",
      photo: "https://randomuser.me/api/portraits/men/77.jpg",
      name: "Rohan Patil",
      job: "Turning complex ideas into scalable production ready software",
      likes: "6.7k",
      posts: 96,
      views: "54.3k",
      isFollowed: false,
    },
    {
      id: 6,
      coverImage:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      photo: "https://randomuser.me/api/portraits/women/66.jpg",
      name: "Amber Lucia",
      job: "Crafting brand focused digital experiences through thoughtful design",
      likes: "18.6k",
      posts: 210,
      views: "139.2k",
      isFollowed: true,
    },
    {
      id: 7,
      coverImage:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      photo: "https://randomuser.me/api/portraits/men/21.jpg",
      name: "Jonathan Whitewall",
      job: "Building scalable backend systems and cloud native architectures",
      likes: "9.2k",
      posts: 118,
      views: "68.4k",
      isFollowed: false,
    },
    {
      id: 8,
      coverImage:
        "https://images.unsplash.com/photo-1487014679447-9f8336841d58",
      photo: "https://randomuser.me/api/portraits/women/34.jpg",
      name: "Jessica Hamilton",
      job: "Helping startups grow through content strategy and analytics",
      likes: "14.8k",
      posts: 165,
      views: "101.6k",
      isFollowed: true,
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {creators.map((creator) => {
          return (
            <Card
              coverImage={creator.coverImage}
              photo={creator.photo}
              name={creator.name}
              job={creator.job}
              likes={creator.likes}
              posts={creator.posts}
              views={creator.views}
              isFollowed={creator.isFollowed}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
