function update_field (content, current_content){
    const payload = {current_string: current_content, new_string: content}
    return(
        {
            type: 'UPDATE_FIELD',
            payload: payload
        }
    )
}

export default update_field
