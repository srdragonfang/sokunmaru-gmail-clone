import {createSlide} from '@reduxjs/toolkit'

export const mailSlice = createSlice({
    name: "mail",
    initiaState: {
        sendMessageIsOpen: false,
    },
    reducers: {
        openSendMessage: (state) => {
            state.sendMessageIsOpen = true
        },
        closeSendMessage: (state) => {
            state.sendMessageIsOpen = false
        }
    }

})

export const {openSendMessage, closeSendMessage} = mailsSlice.actions

export const selectMail = (state) => state.mail.value;

export default mailSlice.reducer;