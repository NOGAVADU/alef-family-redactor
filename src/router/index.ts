import {createRouter, createWebHistory} from "vue-router";
import {Layout} from "../layouts";
import {FormPage, PreviewPage} from "../pages";

const router = createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                component: Layout,
                redirect: {name: 'form'},
                children: [
                    {
                        path: 'form',
                        name: 'form',
                        component: FormPage,
                    },
                    {
                        path: 'preview',
                        name: 'preview',
                        component: PreviewPage
                    }
                ]
            }
        ]
    })
;

export default router;