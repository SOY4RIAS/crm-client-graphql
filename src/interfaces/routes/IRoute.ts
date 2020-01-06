import React from 'react';

export interface IRoute {
    declarativePath: string;
    path: string;
    exact: boolean;
    args: boolean;
    component: React.FC<{}>;
}

