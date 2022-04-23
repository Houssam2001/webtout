import './market.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Col, Row} from "react-bootstrap";
const Market = () => {
    const product= (<div className="product-content product-wrap clearfix">
        <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12">
                <div className="product-image">
                    <img src="" alt="194x228" className="img-responsive"/>
						<span className="tag2 hot">
							HOT
						</span>
                </div>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
                <div className="product-deatil">
                    <h5 className="name">
                        <a href="#">
                            Product Name Title Here <span>Category</span>
                        </a>
                    </h5>
                    <p className="price-container">
                        <span>$99</span>
                    </p>
                    <span className="tag1"/>
                </div>
                <div className="description">
                    <p>Proin in ullamcorper lorem. Maecenas eu ipsum </p>
                </div>
                <div className="product-info smart-form">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <a href="javascript:void(0);" className="btn btn-success">Add to cart</a>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <div className="rating">
                                <label htmlFor="stars-rating-5"><i className="fa fa-star"/></label>
                                <label htmlFor="stars-rating-4"><i className="fa fa-star"/></label>
                                <label htmlFor="stars-rating-3"><i className="fa fa-star text-primary"/></label>
                                <label htmlFor="stars-rating-2"><i className="fa fa-star text-primary"/></label>
                                <label htmlFor="stars-rating-1"><i className="fa fa-star text-primary"/></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)

  return(
      <div className="container">

          <Row ><Col style={{fontSize:'50px' ,marginLeft:'37%',marginBottom:'15px',marginTop:'20px'}}>Market place</Col></Row>

          <div className=" col-md-6 col-md-12 bootstrap snippets bootdeys" >
              <div className='rowC'><Col style={{marginRight:'50px'}}>{product}</Col><Col>{product}</Col></div>
              <div className='rowC'><Col style={{marginRight:'50px'}}>{product}</Col><Col>{product}</Col></div>

          </div>

      </div>
  )
}
export default Market
