const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        /*Простой обьект, не ООП */
              profilePage: {
               posts : [ 
                   {id:1, message:'wwoood', likesCount:2 },
                   {id:2, message:'OK, whats your name ?', likesCount:102}
                 ],
                 newPostText: 'Введите текст'
              },
             dialogsPage: {
                dialogs : [
                {id:1, name:'Asya'},
                {id:2, name: 'Yura'},
                {id:3, name: 'Shelli'},
                {id:4, name: 'Lion'}
            ],
               messages: [
                
                   {id: 1, message: 'Hello, how are you?'},    
                   {id: 2, message: 'Это да, я тоже жду, когда мы сможем првоести вдвоем время'},
                   {id: 3, message: 'Тоже) вот жду, когда мы уже встретимся) и поедем домой'},
                   {id: 4, message: 'Это да, я тоже жду, когда мы сможем првоести вдвоем время'},
                   {id: 5, message: '))) Милота'}
                  ],
                  newMessageBody: ""
              } ,
              sidebar: {}
            },
                _callSubscribber() {
                    console.log('State changed');
                },


                getState (){
                    return this._state;
                },
                subscribe(observer) {
                    this._callSubscribber = observer
                },
           
    
dispatch (action) {
    if (action.type === ADD_POST ) {
        let newPost = {
           id: 5,
           message: this._state.profilePage.newPostText,
           likesCount: 0
        };
           this._state.profilePage.posts.push(newPost);
           this._state.profilePage.newPostText = ''; 
           this._callSubscribber(this._state);
       } else if (action.type === UPDATE_NEW_POST_TEXT ) {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscribber(this._state);
            } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
                this._state.dialogsPage.newMessageBody = action.body;
                this._callSubscribber(this._state);
            } else if (action.type === SEND_MESSAGE) {
                let body = this._state.dialogsPage.newMessageBody;
                this._state.dialogsPage.newMessageBody = '';
                this._state.dialogsPage.messages.push({id: 6, message: body});
                this._callSubscribber(this._state);
                        }
}
}
     
export const addPostActionCreator = () => ({type: ADD_POST});
  export const updateNewPostTextActionCreator = (text) => 
  ({  type: UPDATE_NEW_POST_TEXT, newText: text })

  export const sendMessageCreator = () => ({type: SEND_MESSAGE});
  export const updateNewMessageBodyCreator = (body) => 
  ({  type: UPDATE_NEW_MESSAGE_BODY, body: body })
  

export default store;

