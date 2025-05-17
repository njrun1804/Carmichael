import { useState } from "react";
const data = [
  { quote:"Slides on in seconds—finally a cover I don't dread.", author:"Sam • NJ (4-season climate)" },
  { quote:"Still looks brand-new after our AZ summer sun.", author:"Jamie • AZ" },
  { quote:"Kept our sectional dry all winter in Seattle.", author:"Chris • WA" },
];
export default function Reviews() {
  const [i,setI] = useState(0);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-xl mx-auto text-center space-y-4">
        <p className="text-xl font-serif">“{data[i].quote}”</p>
        <p className="text-sm text-taupe">{data[i].author}</p>
        <button
          onClick={()=>setI((i+1)%data.length)}
          className="mt-6 text-terracotta underline"
        >
          Next&nbsp;Review
        </button>
      </div>
    </section>
  );
}
