import React from "react";
import "./result.css";

const Result =({score,})=>{
		return (
			<div className = "resultDiv">
				{score === 10 ? (
					<div>
						<h1 className="won">You Win!!</h1>
						<img
							className="winLose"
							src="https://static01.nyt.com/images/2016/03/13/opinion/sunday/13butcher/13butcher-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
						/>
					</div>
				) : (
					<div>
						<h1 className="lose">You Lose!!</h1>
						<img
							className="winLose"
							src="https://perkovec.gallerycdn.vsassets.io/extensions/perkovec/emoji/0.0.3/1474455600876/Microsoft.VisualStudio.Services.Icons.Default"
						/>
					</div>
				)}
				<p className = "resultScore">{score}</p>
			</div>
		);
	
}

export default Result;
