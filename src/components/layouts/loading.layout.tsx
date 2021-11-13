
import styles from '@components/styles/loadinglayout.module.scss'

import { LoadingIcon } from '@components/iconset.icons'

import { IErrorLayout } from 'types/codeview.type'

export function LoadingLayout(e: IErrorLayout) {
    return (
        <div className={styles.loading}>
            <LoadingIcon fillColor="white" size={48} />
            {
                e.content && <span className={styles.title}>{e.content}</span>
            }
        </div>
    )
}