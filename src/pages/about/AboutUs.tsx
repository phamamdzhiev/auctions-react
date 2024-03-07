export default function AboutUs() {
    return (
        <section className="container">
            <h1>About us</h1>
            <p className="mb-6">Welcome to <strong className="font-semibold">{process.env.REACT_APP_NAME}</strong>, your
                trusted
                destination for all things numismatic and
                collectible. Founded
                with a passion for rare coins and banknotes, we've been in the business of buying,
                selling, and grading collectibles since our inception.</p>
            <div className="space-y-5">
                <div>
                    <h2 className="text-sm font-semibold mb-3">Our Credentials</h2>
                    <p><strong className="font-semibold">{process.env.REACT_APP_NAME}</strong> is part of Numis Bulgaria <a
                        target="_blank" rel="noopener noreferrer" className="underline"
                        href="https://www.numis-bg.com">www.numis-bg.com</a> which is
                        proud member of prestigious organizations like PCGS, PMG, and NGC, we uphold the highest
                        standards
                        of professionalism and integrity in every transaction. Our affiliation with these organizations
                        is a
                        testament to our dedication to providing you with authenticated and certified collectibles of
                        the
                        utmost quality.</p>
                </div>
                <div>
                    <h2 className="text-sm font-semibold mb-3">Evolution in 2023</h2>
                    <p>In 2023, we've embarked on an exciting new chapter by introducing our cutting-edge e-auction
                        platform. This platform serves as a dynamic marketplace for collectors and enthusiasts, offering
                        a
                        wide range of coins, banknotes, orders, and medals from various eras and cultures.</p>
                </div>
                <div>
                    <h2 className="text-sm font-semibold mb-3">Our E-Auction Platform</h2>
                    <p>At <strong className="font-semibold">{process.env.REACT_APP_NAME}</strong>, we're thrilled to host
                        regular
                        auctions that showcase remarkable pieces from
                        around the world. Whether you're a seasoned collector or a newcomer to the hobby, our e-auction
                        platform provides a convenient and transparent way to buy and sell collectibles. You can
                        explore,
                        bid, and win coveted items from the comfort of your own home, with the assurance of authenticity
                        and
                        quality that comes with our reputation.</p>
                </div>
                <div>
                    <h2 className="text-sm font-semibold mb-3">Join Our Community</h2>
                    <p>We invite collectors, investors, and history enthusiasts alike to become part of our growing
                        community. Whether you're looking to add to your collection, consign items for sale, or simply
                        learn
                        more about the fascinating world of numismatics, <strong
                            className="font-semibold">{process.env.REACT_APP_NAME}</strong> is here to assist you every
                        step of the way.</p>
                </div>
                <div>
                    <h2 className="text-sm font-semibold mb-3">Get in Touch</h2>
                    <p>Ready to explore our e-auction platform or have questions about our services? Don't hesitate to
                        reach
                        out to us. We're here to help you navigate the exciting world of collectibles.</p>
                </div>
            </div>
        </section>
    );
}