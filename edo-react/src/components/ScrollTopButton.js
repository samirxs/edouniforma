import React from "react";
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here

export default function ScrollTopButton() {
  const style = {
    backgroundColor: 'rgba(50, 50, 50, 0.3)'
  }
	return (
		<div>
			<ScrollUpButton style={style} />
		</div>
	);
}
