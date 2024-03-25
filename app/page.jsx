import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>dashboard</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi nobis in perspiciatis, voluptatem magni ratione officia aspernatur! Non, at! Quo sint nam, ut ad officiis voluptatem repudiandae molestiae reprehenderit. Velit, fuga molestias! Illum repudiandae nesciunt ea eveniet, reprehenderit explicabo alias tempore, exercitationem recusandae corporis maiores ipsa! Inventore laboriosam laudantium consectetur.</p>
      <div className="flex justify-center my-8">
        <Link href="/tickets"><button className="btn-primary">View Tickets</button></Link>
      </div>
      <h2>Company Updates</h2>
      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, perferendis?</p>
      </div>
      <div className="card">
        <h3>New website libe!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, accusamus.</p>
      </div>
    </main>
  )
}
