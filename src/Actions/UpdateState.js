export const UpdateState = (id,value)=> dispatch => {
    dispatch({
     type: 'UPDATE_STATE',
     payload: value,
     id:id
    })
   }