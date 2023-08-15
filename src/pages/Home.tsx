import React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { Box, Stack, Typography } from '@mui/material';


interface RenderTree {
    id: string;
    name: string;
    children?: [{
        id: string;
        name: string;
    }]
}

const data: RenderTree[] = [{
    id: 'root',
    name: 'Parent',
    children: [
        {
            id: '1',
            name: 'Child - 1',
        }
    ],
},
{
    id: 'root2',
    name: 'Parent2',
    children: [
        {
            id: '2',
            name: 'Child - 2',
        }
    ],
}];

const Home: React.FunctionComponent = () => {
    document.title = "Home";

    const renderTree = (nodes: RenderTree) => (


        <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
            {Array.isArray(nodes.children)
                ? nodes.children.map((node) => renderTree(node))
                : null}
        </TreeItem>
    );


    return (
        <>
            <Box>
                <Typography variant='h5' color="secondary" align='center'>
                    Example Data
                </Typography>
                <Stack spacing={3} direction="row">
                    <TreeView
                        aria-label="rich object"
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpanded={['root']}
                        defaultExpandIcon={<ChevronRightIcon />}
                    >
                        {data.map((node) => renderTree(node))}
                    </TreeView>
                </Stack>
            </Box>
        </>
    );
};

export default Home;
