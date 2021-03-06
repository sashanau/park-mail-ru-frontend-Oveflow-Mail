import './Text.scss';
import * as templateHBS from './Text.hbs';
import {IText} from './IText'

export class Text {
    private readonly props: IText;

    constructor({
                    color = 'Black',
                    size = 'L',
                    text,
                    id,
                    className = '',
    }: IText) {
        this.props = {
            color,
            size,
            text,
            id,
            className
        };
    }

    render = () => {
        return templateHBS(this.props);
    };
}

