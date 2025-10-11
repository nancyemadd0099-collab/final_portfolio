import './Card.css'

function Card() {
    return (
        <>

            <div className="card">
                <img src="/BeautyShop.png" alt="beautyshop" />

                <div className="desc">
                    <p>BeautyShop Store</p>
                    <div className="links-card">
                        <p><a href="https://beautyshop-store.vercel.app/" target='_blank'>Live demo <i class="fa-solid fa-link"></i></a></p>
                        <p><a href="https://github.com/nancyemadd0099-collab/Beautyshop-Store" target='_blank'>Git Hub <i class="fa-solid fa-link"></i></a></p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Card