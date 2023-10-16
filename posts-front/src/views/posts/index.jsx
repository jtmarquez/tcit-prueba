import React, { useEffect } from "react";
import Table from "../../components/Table";
import TableFilter from "../../components/TableFilter";
import Form from "../../components/Form";
import apiService from "../../services/apiService";
import { useDispatch, useSelector } from "react-redux";
import { POST_ACTION_TYPES } from "../../reducers/posts";
import { tableAttributes, tableTitles, formFields } from "./data";
import './posts.css';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    
    const handleFilterPosts = (filterValues) => {
        dispatch({ type: POST_ACTION_TYPES.FILTER_POST, payload: filterValues });
    };

    const handleFetchPosts = async () => {
        const response = await apiService.findAll('posts');
        const responsePosts = response.data;

        dispatch({ type: POST_ACTION_TYPES.SET_POSTS, payload: responsePosts });
    }

    const handleRemovePost = async (item) => {
        const id = item.id;
        const deletedItem = await apiService.delete('posts', id);

        dispatch({ type: POST_ACTION_TYPES.REMOVE_POST, payload: deletedItem.data });
    }

    const handleCreatePost = async (values) => {
        const response = await apiService.post('posts', values);

        dispatch({ type: POST_ACTION_TYPES.ADD_POST, payload: response.data });
    };

    const action = { title: "Acción", cellText: "Eliminar", onClick: handleRemovePost};

    useEffect(() => {
        handleFetchPosts();
    }, []);

    return (
        <div className="posts-main-container">
            <div className="posts-elements">
                <TableFilter searchAttribute="name" onFilter={handleFilterPosts}/>
                <Table items={posts.filteredPosts ?? posts.posts} headers={tableTitles} displayedColumns={tableAttributes} actions={[action]}/>
                <Form formFields={formFields} onSubmit={handleCreatePost} />
            </div>
        </div>
    )
}

export default Posts;