import {
    ButtonList, ButtonListItem, MainButton
} from "./FeedbackOptions.style";

export const FeedbackOptions = (({options, onLeaveFeedback}) => {
    
    return (
       <ButtonList>
                {options.map((btn =>
                    <ButtonListItem key={btn}>
                        <MainButton type="button" name={btn} onClick={onLeaveFeedback}>{btn}</MainButton>
                    </ButtonListItem>
                ))}
            </ButtonList> 
    )
})