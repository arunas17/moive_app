import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

function View() {
    let location = useLocation();
    const [review, setReview] = useState('')
    const [reviewList, setReviewList] = useState(["super"])
    

    return (
        <div style={{ backgroundColor: 'lightgreen', height: '100vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: '30px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                <h1 style={{ color: 'black', marginBottom: '20px' }}>Reviews</h1>
                <img src={location.state.Poster} alt='Movie Poster' style={{
                    width: 'auto',
                    maxWidth: '100%',
                    maxHeight: '400px',
                    marginBottom: '20px'
                }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '30px', width: '50%', maxWidth: '600px' }}>
                {location?.state?.Trailer ?
                    <ReactPlayer controls="true" playing={true} url={location.state.Trailer}
                        width='100%' height='100%' /> : <></>
                }
                <h3 style={{ color: 'black', marginBottom: '15px' }}>
                    Update your Reaction:
                </h3>
                <textarea value={review} style={{
                    height: '100px',
                    width: '100%',
                    padding: '10px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    marginBottom: '20px'
                }} onChange={(e) => {
                    if (e.target.value !== '') {
                        setReview(e.target.value);
                    }
                }} />
                <button style={{
                    padding: '10px 20px',
                    backgroundColor: '#008CBA',
                    color: 'black',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    alignSelf: 'flex-start',
                    marginBottom: '20px'
                }} onClick={() => {
                    setReviewList([...reviewList, review]);
                    setReview('');
                }}>
                    Submit
                </button>

                {reviewList.map((review, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        color: 'black',
                        paddingBottom: '10px',
                        borderBottom: '1px solid #555',
                        marginBottom: '10px'
                    }}>
                        <div style={{ flexGrow: 1 }}>
                            {review}
                        </div>
                        {/* <img src={''} alt='Del' style={{
                            height: '20px',
                            width: '20px',
                            cursor: 'pointer'
                        }} /> */}
                    </div>
                ))}
            </div>
        </div>

    )
}
export default View