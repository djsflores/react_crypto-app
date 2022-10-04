import React from 'react';
import imagenFiona from '../../assets/images/remove.bg-designify-edit.png';
import imagenMrX from '../../assets/images/mr-x.jpg';
import imagenAshes from '../../assets/images/stars-dust.jpg';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div data-testid='us-test'>
      <div className="row">
        <div className="col-sm-3 mx-2">
          <div className="card bg-warning border-warning mb-3">
            <div className="card-header">Perrito</div>
            <img src={imagenFiona} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title text-center">Fiona</h5>
              <p className="card-text">Perrito de edad incierta que solo <span className='txt-highlighted'>come</span> y <span className='txt-highlighted'>juega</span>.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mx-2">
          <div className="card bg-warning border-warning mb-3">
          <div className="card-header">Humanoide</div>
            <img src={imagenMrX} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title text-center">David</h5>
              <p className="card-text">Humano malhumorado que solo <span className='txt-highlighted'>juega</span>.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mx-2">
          <div className="card bg-warning border-warning mb-3">
          <div className="card-header">Humanoide</div>
            <img src={imagenAshes} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title text-center">Ashes</h5>
              <p className="card-text">Humana malhumorada que solo <span className='txt-highlighted'>come</span>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
