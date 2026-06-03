import Card from "./components/Card"

function App() {

  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZfieaZtdvIzVN3wyLKX8cxUnsZrghKJy-Q&s", company: "Google",
    datePosted: "2 days ago",
    post: "Senior Software Engineer, Search Infrastructure",
    tag1: "Full Time", tag2: "Senior Level",
    pay: "$95–$130/hr", location: "Bengaluru, India"
  },
  {
    brandLogo: "https://cdn.dribbble.com/userupload/29828185/file/original-5bcab5b55efba8f8486479f1d72a3106.png", company: "Microsoft",
    datePosted: "5 days ago",
    post: "Principal Engineer, Azure Compute",
    tag1: "Full Time", tag2: "Senior Level",
    pay: "$85–$115/hr", location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv48DgacV_072bfO_oyhmMXGnNvIgQwWoH5Q&s", company: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer II, AWS Lambda",
    tag1: "Full Time", tag2: "Mid Level",
    pay: "$75–$100/hr", location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdeDVxwJhsdMEbC2Ft1nDjdyjNOcCBMjeMSA&s", company: "Meta",
    datePosted: "3 days ago",
    post: "ML Engineer, Ranking Systems",
    tag1: "Full Time", tag2: "Senior Level",
    pay: "$100–$140/hr", location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", company: "Apple",
    datePosted: "10 days ago",
    post: "iOS Platform Engineer",
    tag1: "Full Time", tag2: "Junior Level",
    pay: "$55–$75/hr", location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png", company: "Netflix",
    datePosted: "2 weeks ago",
    post: "Senior Backend Engineer, Streaming Platform",
    tag1: "Full Time", tag2: "Senior Level",
    pay: "$110–$150/hr", location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZfieaZtdvIzVN3wyLKX8cxUnsZrghKJy-Q&s", company: "Google",
    datePosted: "4 days ago",
    post: "Product Manager, Google Cloud",
    tag1: "Part Time", tag2: "Mid Level",
    pay: "$70–$95/hr", location: "Pune, India"
  },
  {
    brandLogo: "https://cdn.dribbble.com/userupload/29828185/file/original-5bcab5b55efba8f8486479f1d72a3106.png", company: "Microsoft",
    datePosted: "6 days ago",
    post: "Data Scientist, Bing Ads",
    tag1: "Full Time", tag2: "Junior Level",
    pay: "$50–$70/hr", location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv48DgacV_072bfO_oyhmMXGnNvIgQwWoH5Q&s", company: "Amazon",
    datePosted: "3 weeks ago",
    post: "Applied Scientist, Alexa AI",
    tag1: "Full Time", tag2: "Senior Level",
    pay: "$90–$120/hr", location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdeDVxwJhsdMEbC2Ft1nDjdyjNOcCBMjeMSA&s", company: "Meta",
    datePosted: "1 day ago",
    post: "Frontend Engineer, WhatsApp",
    tag1: "Full Time", tag2: "Junior Level",
    pay: "$45–$65/hr", location: "Mumbai, India"
  }
];

  return (
    <>
    <div className='parent'>

       {jobOpenings.map(function(elem, idx) {

        return <div key={idx}>
          <Card company={elem.company} post={elem.post} pay={elem.pay} brandLogo={elem.brandLogo} datePosted={elem.datePosted} 
          tag1={elem.tag1} tag2={elem.tag2}/>
        </div>
       })}     
    </div>  
    </>
  )
}

export default App