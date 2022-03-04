import PirateList from "../components/pirates/PirateList";

const DUMMY_PIRATES = [
  {
    id: "p1",
    name: "Whitebeard",
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8ddfe70-0b23-4aef-8d58-769268414fcb/ddh2a1w-cfbbfc8f-63d5-4601-b3ab-2ebe70eef135.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q4ZGRmZTcwLTBiMjMtNGFlZi04ZDU4LTc2OTI2ODQxNGZjYlwvZGRoMmExdy1jZmJiZmM4Zi02M2Q1LTQ2MDEtYjNhYi0yZWJlNzBlZWYxMzUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.j7WIpfpvlhPHCYfuLAUZGRqD6gYsg2UqYTlgZEBZrhQ",
    description: "Father. Also known as the strongest man in the world.",
  },
  {
    id: "p2",
    name: "Kaido",
    image: "https://i.pinimg.com/564x/99/a2/9c/99a29c60b94614365c2fb11bcbea21f5.jpg",
    description: "Dragon king",
  },
  {
    id: "p3",
    name: "Mihawk",
    image: "https://i.pinimg.com/736x/23/f9/a8/23f9a85ddb151827912c31e22b458257.jpg",
    description: "Best swordman in the world. Badass.",
  },
  {
    id: "p4",
    name: "Zoro",
    image: "https://i.pinimg.com/originals/9d/bd/d2/9dbdd20fbba3c2e587319623776d9f59.jpg",
    description: "Coolest character. Badass sick three sworded man.",
  },
];

function HomePage() {
  return <PirateList pirates={DUMMY_PIRATES} />;
}

export default HomePage;
