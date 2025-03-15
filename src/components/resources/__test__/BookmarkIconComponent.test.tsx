import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BookmarkIconComponent from '../BookmarkIconComponent';
import bookmarkFull from '../../assets/bookmark_full.svg';
import bookmarkEmpty from '../../assets/Bookmark_empty.svg';

describe("FavoriteResource Component", () => {
    it("The component must have the initial styles", () => {
        render(<BookmarkIconComponent marked={false} />);
        const favoriteResource = screen.getByTestId("favorite-resource");
        expect(favoriteResource).toHaveClass("inline-flex");
    });
});
describe('BookmarkIconComponent', () => {
    it('renders bookmarkEmpty when marked is true', () => {
        render(<BookmarkIconComponent marked={true} />);
        expect(screen.getByAltText('bookmark none')).toBeInTheDocument();
        expect(screen.getByAltText('bookmark none')).toHaveAttribute('src', bookmarkEmpty);
    });

    it('renders bookmarkFull when marked is false', () => {
        render(<BookmarkIconComponent marked={false} />);
        expect(screen.getByAltText('bookmark on')).toBeInTheDocument();
        expect(screen.getByAltText('bookmark on')).toHaveAttribute('src', bookmarkFull);
    });

    it('renders a div with correct class names', () => {
        render(<BookmarkIconComponent marked={true} />);
        expect(screen.getByRole('img').closest('div')).toHaveClass('flex items-center justify-start gap-2 max-h-12');
    });

    it('renders img with correct height', () => {
        render(<BookmarkIconComponent marked={true} />);
        expect(screen.getByAltText('bookmark none')).toHaveAttribute('height', '16');
    });
});