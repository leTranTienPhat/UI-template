import { IShowcase } from "../model/showcaseModel";
import person01 from "../assets/person1.webp"
import background01 from "../assets/person1-bg.webp"
import person02 from "../assets/person2.webp"
import background02 from "../assets/person2-bg.webp"
import person03 from "../assets/person3.webp"
import background03 from "../assets/person3-bg.webp"

export const slideData: IShowcase[] = [
  {
    id: 1,
    name: "Aerith Gainsborough",
    company: "Untitled UI",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quod, quidem dolorum voluptatem doloremque, in error commodi doloribus odit repellendus rem, optio a provident eveniet aliquid excepturi reiciendis quis amet. Quas voluptatem quaerat dolorem dolores, voluptatibus nisi ex quia eveniet in perferendis exercitationem ab maiores tempore libero veniam voluptas vel quis laboriosam, distinctio consequuntur suscipit! Commodi officia dolores tenetur at!",
    image: person01,
    background: background01
  },
  {
    id: 2,
    name: "Tifa Lockhart",
    company: "Untitled UI",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quod, quidem dolorum voluptatem doloremque, in error commodi doloribus odit repellendus rem, optio a provident eveniet aliquid excepturi reiciendis quis amet. Quas voluptatem quaerat dolorem dolores, voluptatibus nisi ex quia eveniet in perferendis exercitationem ab maiores tempore libero veniam voluptas vel quis laboriosam, distinctio consequuntur suscipit! Commodi officia dolores tenetur at!  Dolor quod, quidem dolorum voluptatem doloremque, in error commodi doloribus odit repellendus rem, optio a provident eveniet aliquid excepturi reiciendis quis amet. Quas voluptatem quaerat dolorem dolores, voluptatibus nisi ex quia eveniet in perferendis exercitationem ab maiores tempore libero veniam voluptas vel quis laboriosam, distinctio consequuntur suscipit! Commodi officia dolores tenetur at!",
    image: person02,
    background: background02
  },
  {
    id: 3,
    name: "Cloud Strife",
    company: "Untitled UI",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quod, quidem dolorum voluptatem doloremque, in error commodi doloribus odit repellendus rem, optio a provident eveniet aliquid excepturi reiciendis quis amet. Quas voluptatem quaerat dolorem dolores, voluptatibus nisi ex quia eveniet in perferendis exercitationem ab maiores tempore libero veniam voluptas vel quis laboriosam, distinctio consequuntur suscipit! Commodi officia dolores tenetur at!  Dolor quod, quidem dolorum voluptatem doloremque, in error commodi doloribus odit repellendus rem, optio a provident eveniet aliquid excepturi reiciendis quis amet. Quas voluptatem quaerat dolorem dolores, voluptatibus nisi ex quia eveniet in perferendis exercitationem ab maiores tempore libero veniam voluptas vel quis laboriosam",
    image: person03,
    background: background03
  }
]