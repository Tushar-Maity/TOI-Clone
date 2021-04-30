import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import { truncate } from '../../utils';

const EntImgs = ({ entNews }) => {
    return (
        <>
            <h2>
                ETIMES PHOTOS
                <ArrowForwardIosIcon className="heading-arrow" />
            </h2>
            <div className="entertainment__rightImages">
            {entNews && entNews.slice(6, 15).map(entNew => (
                <a
                    key={entNew.id} 
                    href={entNew.webUrl} 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <div className="entertainment__leftBottom--single">
                        <div>
                            <img 
                                src={entNew.fields.thumbnail} 
                                alt={entNew.webTitle}
                            />
                            <h3 className="count">
                                <CropOriginalIcon className="img-icon" />
                                10
                            </h3>
                        </div>
                        <p>
                            {truncate(entNew.webTitle, 25)}
                        </p>
                    </div>
                </a>
            ))
            }
            </div>
        </>
    )
}

export default EntImgs
