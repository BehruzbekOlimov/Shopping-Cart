import Footer from "./Footer";

let name = 'Ali'
let className = 'container'

function Section() {
    return (
        <section className="section-1">
            <div className={className}>
                Section {name}
                <img className="w-100" src="/images/6.jpg" alt="sea"/>
            </div>
            <Footer/>
        </section>
    )
}

export default Section