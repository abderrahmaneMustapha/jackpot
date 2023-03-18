import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';

const navLinks = [
  { key: '1', name: 'Link 1' },
  { key: '2', name: 'Link 2' },
  { key: '3', name: 'Link 3' },
];
const activeNavLink = navLinks[0];
const onNavLinkChange = jest.fn();

describe('Navigation component', () => {
  test('renders navigation links', () => {
    render(<Navigation navLinks={navLinks} activeNavLink={activeNavLink} onNavLinkChange={onNavLinkChange} />);
    const link1 = screen.getByText('Link 1');
    const link2 = screen.getByText('Link 2');
    const link3 = screen.getByText('Link 3');
    expect(link1).toBeInTheDocument();
    expect(link2).toBeInTheDocument();
    expect(link3).toBeInTheDocument();
  });

  test('calls onNavLinkChange when link is clicked', () => {
    render(<Navigation navLinks={navLinks} activeNavLink={activeNavLink} onNavLinkChange={onNavLinkChange} />);
    const link2 = screen.getByText('Link 2');
    fireEvent.click(link2);
    expect(onNavLinkChange).toHaveBeenCalledTimes(1);
    expect(onNavLinkChange).toHaveBeenCalledWith(navLinks[1]);
  });

  test('applies active style to active link', () => {
    const activeNavLink = navLinks[1];
    render(<Navigation navLinks={navLinks} activeNavLink={activeNavLink} onNavLinkChange={onNavLinkChange} />);
    const link1 = screen.getByText('Link 1');
    const link2 = screen.getByText('Link 2');
    const link3 = screen.getByText('Link 3');
    expect(link1).not.toHaveStyle("background-color: #8DC63F")
    expect(link2).toHaveStyle("background-color: #8DC63F")
    expect(link3).not.toHaveStyle("background-color: #8DC63F")
  });
});