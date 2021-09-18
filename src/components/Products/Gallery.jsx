import style from "./Gallery.module.css";
import Item from "./Item";

function Gallery() {
  return (
    <div className="container">
      <div className={style.gallery}>
        {items.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            person={item.person}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;

const items = [
  {
    id: 1,
    image: "https://i.stack.imgur.com/y9DpT.jpg",
    name: "Mini Spy Scope",
    person: "Jonhalyn C. Go",
  },
  {
    id: 2,
    image: "https://i.stack.imgur.com/y9DpT.jpg",
    name: "Mini Spy Scope",
    person: "Jonhalyn C. Go",
  },
  {
    id: 3,
    image: "https://i.stack.imgur.com/y9DpT.jpg",
    name: "Mini Spy Scope",
    person: "Jonhalyn C. Go",
  },
  {
    id: 4,
    image: "https://i.stack.imgur.com/y9DpT.jpg",
    name: "Mini Spy Scope",
    person: "Jonhalyn C. Go",
  },
  {
    id: 5,
    image: "https://i.stack.imgur.com/y9DpT.jpg",
    name: "Mini Spy Scope",
    person: "Jonhalyn C. Go",
  },
  {
    id: 6,
    image: "https://i.stack.imgur.com/y9DpT.jpg",
    name: "Mini Spy Scope",
    person: "Jonhalyn C. Go",
  },
  {
    id: 7,
    image: "https://i.stack.imgur.com/y9DpT.jpg",
    name: "Mini Spy Scope",
    person: "Jonhalyn C. Go",
  },
  {
    id: 8,
    image: "https://i.stack.imgur.com/y9DpT.jpg",
    name: "Mini Spy Scope",
    person: "Jonhalyn C. Go",
  },
];
