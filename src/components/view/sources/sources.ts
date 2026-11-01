import type { ISource } from '../../../types/index.js';
import './sources.css';

class Sources {
    draw(data: ISource[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const itemName = sourceClone.querySelector('.source__item-name');
            if (itemName) itemName.textContent = item.name;

            const itemContainer = sourceClone.querySelector('.source__item') as HTMLElement;
            if (itemContainer) {
                itemContainer.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sourceContainer =  document.querySelector('.sources');
        if (sourceContainer) sourceContainer.append(fragment);
    }
}

export default Sources;
