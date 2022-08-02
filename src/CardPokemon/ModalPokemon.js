import React, { Component } from 'react'

export default class ModalPokemon extends Component {
    render() {
        const { pokemon } = this.props
        let img;
        if (pokemon.id < 10) {
            img = '00' + pokemon.id
        } else {
            if (pokemon.id < 100) {
                img = '0' + pokemon.id
            } else {
                img = pokemon.id
            }
        }
        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document" >
                        <div className="modal-content" style={{ width: 650 }}>
                            <div className="modal-header">
                                <div><img className="card-img-top" src={`../../assets/images/sprites/${img}MS.png`} /></div>
                                <h5 className="modal-title">{pokemon.name.english} ({pokemon.name.japanese})</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className='row'>
                                    <div className='col-6'>
                                        <img className="card-img-top" src={`../../assets/images/img/${img}.png`} style={{ maxWidth: 200 }} />
                                    </div>
                                    <div className='col-6'>
                                        <table class="table">
                                            <tbody>
                                                <tr>
                                                    <td className='fw-b'>Type:</td>
                                                    <td>{(pokemon.type).join(' ')}</td>
                                                </tr>
                                                <tr>
                                                    <td className='fw-b'><i className="fas fa-heart" style={{ color: '#d60202' }}></i><br />(HP)</td>
                                                    <td className='fs-20'>{pokemon.base.HP}</td>
                                                    <td className='fw-b'><i class="fas fa-meteor" style={{ color: '#ffd400' }}></i><br />(Attack)</td>
                                                    <td className='fs-20'>{pokemon.base.Attack}</td>
                                                </tr>
                                                <tr>
                                                    <td className='fw-b'><i class="fab fa-phoenix-squadron" style={{ color: '#e5ff54' }}></i><br />(Sp.ATK)</td>
                                                    <td className='fs-20'>{pokemon.base.SpAttack}</td>
                                                    <td className='fw-b'><i class="fab fa-old-republic" style={{ color: '#00c12a' }}></i><br />(Sp.DEF)</td>
                                                    <td className='fs-20'>{pokemon.base.SpDefense}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
