// GitUser.js
import React from "react";
import { useLoaderData } from "react-router-dom";

const GitUser = () => {
    const data = useLoaderData();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md">
                <div className="flex flex-col items-center p-6">
                    <img
                        src={data.avatar_url}
                        alt={`${data.login}'s avatar`}
                        className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4"
                    />
                    <h2 className="text-xl font-semibold text-gray-800">{data.name || data.login}</h2>
                    <p className="text-gray-600">@{data.login}</p>
                    <p className="mt-2 text-gray-500">Bio: {data.bio || "No bio available"}</p>
                    <p className="mt-1 text-gray-500">Location: {data.location || "Not specified"}</p>

                    <div className="flex mt-4 space-x-6">
                        <div className="text-center">
                            <span className="block font-semibold text-gray-800">{data.followers}</span>
                            <span className="text-gray-500">Followers</span>
                        </div>
                        <div className="text-center">
                            <span className="block font-semibold text-gray-800">{data.following}</span>
                            <span className="text-gray-500">Following</span>
                        </div>
                        <div className="text-center">
                            <span className="block font-semibold text-gray-800">{data.public_repos}</span>
                            <span className="text-gray-500">Public Repos</span>
                        </div>
                    </div>

                    <a
                        href={data.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        View Profile on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GitUser;

/**
 * This method is called before the component is rendered and in route
 * @returns 
 */
export const gitUserLoader = async () => {
    const response = await fetch('https://api.github.com/users/kachhaplily');
    const data = await response.json();
    return data;
};
