import { renderHook, act } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { UserProvider, useUserContext } from '../context/UserContext';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <UserProvider>{children}</UserProvider>
);

describe('UserContext', () => {
  test('should provide default value (user is null)', () => {
    const { result } = renderHook(() => useUserContext(), { wrapper });
    expect(result.current.user).toBe(null);
  });

  test('should update the user with setUser', () => {
    const mockUser = { id: 1, displayName: 'Test User', photoURL: '', role: 'guest' };
    const { result } = renderHook(() => useUserContext(), { wrapper });

    act(() => {
      result.current.setUser(mockUser);
    });

    expect(result.current.user).toEqual(mockUser);
  });

  test('should logout (set user to null)', () => {
    const mockUser = { id: 2, displayName: 'Test User 2', photoURL: '', role: 'admin' };
    const { result } = renderHook(() => useUserContext(), { wrapper });

    act(() => {
      result.current.setUser(mockUser);
    });

    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBe(null);
  });

  test('should throw if used outside of provider', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => renderHook(() => useUserContext())).toThrow(
      'useUser must be used within a UserProvider'
    );
    errorSpy.mockRestore();
  });
});