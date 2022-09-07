import { useRef } from "react";
import "./styles.css"

export interface PopUpProps{
  count?: Number;
  setShowModal?: (modal: boolean) => void;
}

export function PopUp({setShowModal, count}:PopUpProps) {

  const modalRef = useRef<HTMLHeadingElement>(null);
  const closeModal = (e:any) => {
    if (e.target === modalRef.current && setShowModal) {
      setShowModal(false);
    }
  };

  return (
    <div className="popup" ref={modalRef} onClick={closeModal}>
      <div className="popup__content">
        <div className="popup__content--title">
        {
            count && 
            count < 12 && 
            (<h2>Very good</h2>)
          }
          {
            count && 
            count >= 12 && count <= 20 &&
            (<h2>Good</h2>)
          }
          {
            count && 
            count >= 20 &&
            (<h2>Median</h2>)
          }
          
          <button onClick={() => {
            if(setShowModal){
              setShowModal(false)
            }
          }}>X</button>
        </div>
        <div className="popup__content--ranking">
          {
            count && 
            count <= 20 && 
            ( <div className="icon">
            ⭐
            </div>)
          }
          {
            count && 
            count <= 15  && 
            ( <div className="icon">
            ⭐
            </div>)
          }
          {
            count && 
            count <= 12  && 
            ( <div className="icon">
            ⭐
            </div>)
          }
        </div>
      </div>
    </div>
     )
}